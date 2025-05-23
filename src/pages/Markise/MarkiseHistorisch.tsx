import Figure from '../../components/Figure/Figure'

const MarkiseHistorisch = () => {
  return (
    <div className={'markise-historisch'}>
      <h1>historisches aussersihl</h1>
      <Figure
        src='baeckeranlage.webp'
        caption='bäckeranlage, das neue schulhaus an der kernstrasse, 1905 (fotograf_in: unbekannt)'
      />
      <Figure
        src='baeckeranlage-1900.webp'
        caption='bäckeranlage, 1906-1907 (ruef-hirz friedrich)'
      />
      <Figure
        src='badenerstrasse-roesslitram.webp'
        caption='letzte fahrt des rösslitrams, badenerstrasse, 1900 (fotograf_in: unbekannt)'
      />
      <Figure
        src='helvetiaplatz-1917.webp'
        caption='abgabe verbilligter kartoffeln durch das lebensmittelamt, helvetiaplatz, 1917 (schucht eduard robert)'
      />
      <Figure
        src='plan-aussersihl-1871.webp'
        caption='plan aussersihl 1, 1871'
      />
      <p>
        anwandstrasse = Flurname, Kopfende eines ackers, hier wurde der Pflug
        gewendet. Besonders im Sihlfeld häufige alemannische Flureinteilung.
        Anwände sind meistens rechteckige Gebilde aus Ackern, laufen sie in ein
        Dreieck aus, bezeichnete man diese als Geeren (Pfeilspitze.). Um eine
        Anwand (Ackerkomplex) herum führten meistens Strassen und Wege.
      </p>
      <Figure
        src='hydrantenplan-1880.webp'
        caption='hydrantenplan der feuerwehr, aussersihl, ca. 1880'
      />
      <blockquote>
        «Wo noch vor wenig Jahren Auf weitem Ackerfeld Ergötzten gold’ne Saaten
        Von Landmanns Hand bestellt, … Da drängen sich jetzt Menschen In Häusern
        ohne Zahl, Von allen Ländern kommend; Wir haben nicht die Wahl».
      </blockquote>
      <cite>johann hasler, lokaldichter und landwirt</cite>
      <p>
        ...[Es verdient festgehalten zu werden, dass der angesprochene Konsens
        der Öffentlichkeit bezüglich der Entwicklung Aussersihls zum
        Unterschichtenquartier nur die Fortsetzung einer langen Tradition
        bildete, nämlich der Konzentration von negativ prägenden Merkmalen auf
        dem Gebiet dieser Gemeinde. 48* Seit dem 12. Jahrhundert bis gegen Ende
        des 17. Jahrhunderts wurden im Siechenhaus St. Jakob vor der Sihlbrücke
        die Aussätzigen der Stadt Zürich untergebracht. In der Hard stand der
        Galgen und später das Hochgericht. Nicht seltene Naturkatastrophen wie
        Überschwemmungen und Eisgänge der Sihl hatten für die Gegend ebenso
        verheerende Konsequenzen wie der alte Zürichkrieg und die
        österreichisch-russischen Auseinandersetzungen während der Helvetik und
        prägten das Image des Gebietes genauso wie die Ansiedlung von
        gewerblichen und industriellen Betrieben während des 18. Jahrhunderts im
        Sihl- und Limmatraum. Die nachhaltigsten Folgen zeitigte wohl der Bau
        der Eisenbahn: Allein schon die Lage im "Schatten" des Bahnhofs zog eine
        statusmässige Entwertung der Gegend nach sich und verminderte die
        Attraktivität Aussersihls als potentielles Wohngebiet für finanziell
        besser gestellte Bevölkerungsschichten. 49*
      </p>
      <p>
        Verschiedenste Mosaiksteinchen vervollkommneten das Bild. Eine Vielzahl
        von Klein- und Kleinstbetrieben wie Maschinen-, Spengler- und
        Schlosserwerkstätten, Giessereien, Schreinereien, Sattlereien,
        Färbereien und vor allem auch die zahlreichen Bau- und Bauzulieferfirmen
        erzeugten einen permanenten Lärm und Gestank. Mit dem Ausbau der
        Eisenbahnanlagen, dem Bau der Militärkaserne und Zeughäuser, später der
        Errichtung eines eigentlichen Industriequartiers, der städtischen
        Fäkalienkübel-Waschanlage, des Gaswerks, des städtischen
        Zentralfriedhofs, der Polizeikaserne, des Bezirksgefängnisses wurden
        zusätzliche negativ bewertete Landmarken gesetzt, die als weitere
        Faktoren der Stigmatisierung das ihrige zum sich selberverstärkenden
        Prozess der Segregation beitrugen.
      </p>
      <p>
        "Wo das Kleingewerbe und der Arbeiterstand seine Stätte findet, da
        flieht der wohlhabende Kaufmann und Rentier; wo die mächtigen Maschinen
        der modernen Industrie rumoren und die Dampfpfeife schrill ertönt, da
        meidet es die stille Wissenschaft, sich anzusiedeln. (...) Wie der
        Stein, der in's Rollen gekommen ist, mit immer grösseren Sätzen der
        Tiefe zueilt, so wurde auch die Situation von Aussersihl immer
        unhaltbarer, nachdem der oben beschriebene Ausscheidungsprozess einmal
        begonnen hatte." 50*]…
      </p>
      <p>
        48* Vgl. dazu die ausführlicheren Angaben in Bärtschl,
        Industrialisierung, speziell S. 419ff. und in Kreis, Segregation,
        S.37-51,
      </p>
      <p>
        49* Das 'Bahnhofsviertel' als wenig geschätztes Quartier findet sich in
        vielen anderen Städten (vgl. Mumford, Stadt, S. 536ff.). Ähnlich
        gruppieren sich in Hamburg die Unterschichtenquartiere um den Hafen
        (vgl. Wischermann, Wohnen, S. 390ff.
      </p>
      <p>50* Petition der Gemeinde Aussersihl, S. 6, 8.</p>
      <p>S. 85-96.</p>
      <h2>quellenangaben</h2>
      <ul>
        <li>
          bilder, baugeschichtliches archiv, eth e-pics{' '}
          <a href={'e-pics.ethz.ch/de/baz_ueber/'}>link</a>
        </li>
        <li>
          texte, quartierverein aussersihl und hard{' '}
          <a href='8004.ch/kreis-4-informationen/bauen-wohnen/strassen-flurnamen-alte-bezeichnungen/'>
            link
          </a>
        </li>
        <li>
          wohnen im arbeiterquartier, auszug lizenziatsarbeit von daniel künzle,
          1985
        </li>
      </ul>
    </div>
  )
}

export default MarkiseHistorisch
