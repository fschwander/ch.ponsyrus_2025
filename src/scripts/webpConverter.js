import CWebp from 'cwebp'
import fs from 'fs'
import {
  printError,
  printHighlighted,
  printSuccess,
  printUnobstrusive,
} from './nodeLogs.js'

/**
 WEBP Converter
 Scans the image directory (or sub-directories) and converts all PNGs and JPGs to WEBPs
 * @param {string} [subdir] - a sub-directory relative to `./src/content/assets/images/`
 * @param {number} [quality] - the image quality of the WEBP
 * @param {boolean} [deleteOriginal] - the image quality of the WEBP
 */

const args = process.argv.slice(2)
const options = {}
args.forEach((arg) => {
  const [key, value] = arg.split('=')
  options[key.slice(2)] =
    value === 'false' ? false : value === 'true' ? true : value
})

const QUALITY = options.quality || 50
const IMAGES_PATH = './src/assets/images/' + (options.subdir || '')
const DELETE_ORIGINAL_FILE = options.deleteOriginal || false

/**
 * IMPORTANT: check if cwebp is installed globally on your machine.
 * Otherwise, use brew install webp or npm i -g cwebp
 */
fs.readdir(IMAGES_PATH, function (err, files) {
  printHighlighted(
    `Start writing files to ${IMAGES_PATH} with quality=${QUALITY}:`,
    false,
  )

  files.forEach(function (fileName) {
    if (
      fileName.endsWith('.jpg') ||
      fileName.endsWith('.png') ||
      fileName.endsWith('.JPG') ||
      fileName.endsWith('.PNG')
    ) {
      const newFileName = fileName.replace(/.jpg|.png|.JPG|.PNG/gi, '.webp')
      const encoder = new CWebp(IMAGES_PATH + fileName)
      encoder.quality(QUALITY)
      encoder.write(IMAGES_PATH + newFileName, function (err) {
        if (err) {
          printError(`${fileName}. ${err.message}`, false, false)
        } else {
          printSuccess(`Converted: ${newFileName}`, false, false)

          if (DELETE_ORIGINAL_FILE) {
            try {
              fs.unlinkSync(IMAGES_PATH + fileName)
              printUnobstrusive(`    Original file deleted: ${fileName}`, false)
            } catch (err) {
              printError(err)
            }
          }
        }
      })
    }
  })
})
