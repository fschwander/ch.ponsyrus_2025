import { execSync } from 'child_process'
import { config } from 'dotenv'
import { existsSync } from 'fs'
import { readdir, stat } from 'fs/promises'
import { resolve, join } from 'path'
import SftpClient from 'ssh2-sftp-client'

const DEPLOY_ENV = process.env.DEPLOY_ENV || 'test'
const envPath = resolve(`.env.${DEPLOY_ENV}`)

if (!existsSync(envPath)) {
  console.error(`❌ Missing environment file: ${envPath}`)
  process.exit(1)
}

config({ path: envPath })

const { HOST, USERNAME, PASSWORD, REMOTE_PATH, PORT } = process.env

if (!HOST || !USERNAME || !PASSWORD || !REMOTE_PATH) {
  console.error(`❌ Missing credentials in ${envPath}`)
  process.exit(1)
}

async function uploadDir(sftp, localDir, remoteDir) {
  try {
    await sftp.mkdir(remoteDir, true)
  } catch {}
  const items = await readdir(localDir)
  for (const item of items) {
    const localPath = join(localDir, item)
    const remotePath = remoteDir + '/' + item
    const stats = await stat(localPath)
    if (stats.isDirectory()) {
      await uploadDir(sftp, localPath, remotePath)
    } else {
      await sftp.fastPut(localPath, remotePath)
    }
  }
}

async function deploy() {
  try {
    console.log('🚧 Building project...')
    execSync('npm run build', { stdio: 'inherit' })
  } catch (err) {
    console.error('❌ Build failed:', err.message)
    process.exit(1)
  }

  const sftp = new SftpClient()
  try {
    console.log(`🔐 Connecting to SFTP ${HOST}...`)
    await sftp.connect({
      host: HOST,
      port: PORT,
      username: USERNAME,
      password: PASSWORD,
    })
    console.log(`🚀 Uploading 'dist' to ${REMOTE_PATH}...`)
    await uploadDir(sftp, resolve('dist'), REMOTE_PATH)
    console.log('✅ Deployment complete!')
  } catch (err) {
    console.error(
      '❌ Deployment failed. Evt. muss FTPS von Hostfactory für diese Domain freigegeben werden (einloggen, bei FTP/SSH nachschauen). Error:',
      err.message,
    )
    process.exit(1)
  } finally {
    sftp.end()
  }
}

deploy()
