const fs = require('fs');
const path = require('path');
const { version } = require('../package.json');

const createMSXConfig = (url) => ({
  name: 'Kino Station X',
  extension: `Версия ${version}`,
  version: `${version}`,
  parameter: 'content:{PREFIX}{SERVER}/msx/start.json',
  action: '[settings:validate_links:0|home]',
  dictionary: 'http://fxml.ru/msx/lang/ru.json',
  pages: [
    {
      items: [
        {
          id: 'description',
          type: 'space',
          layout: '5,0,5,5',
          text: '',
        },
        {
          type: 'control',
          layout: '0,0,5,1',
          image: `${url}/icon-large.png`,
          label: 'KinoPub',
          action: `link:${url}`,
          selection: {
            important: true,
            action: 'update:content:description',
            data: {
              text: ['{txt:msx-white: KinoPub} — Приложения позволяет смотреть сериалы, фильмы, мультфильмы и т. д. с сайта kino.pub.'],
            },
          },
        },
        {
          type: 'control',
          layout: '0,1,5,1',
          image: 'https://web.vplay.one/img/msx-logo-wrap.png',
          label: 'vPlay',
          action: 'link:https://web.vplay.one',
          selection: {
            important: true,
            action: 'update:content:description',
            data: {
              text: ['{txt:msx-white: vPlay} — Новости проекта {br} https://t.me/vplaynews'],
            },
          },
        },
        {
          type: 'control',
          layout: '0,2,5,1',
          image: 'http://msx.benzac.de/img/icon_raw.png',
          label: 'FXMLPlayer',
          action: 'execute:http://msxplayer.ru/msx/get-start-action',
          selection: {
            important: true,
            action: 'update:content:description',
            data: {
              text: [
                '{txt:msx-white: FXMLPlayer} - это программа для удобного просмотра тв, фильмов, телепередач и другого.{br}',
                '{ico:msx-green:add-circle} Поддержка {txt:msx-white:лучших} порталов FXML {txt:msx-white: RFork Online, KinoPub, CoolTV, KinoBoom} {br}',
                '{ico:msx-green:add-circle} Возможность загрузки фильмов и сериалов из приложения HDVideoBox, LazyMedia Deluxe{br}{br}',
                '{ico:info}Данная версия грузит обновленную версию Media Station X из интернета, так как для плейлиста FXMLPlayer требуется версия Media Station X не ниже версии {txt:msx-white:0.1.120}{br}',
              ],
            },
          },
        },
        {
          type: 'control',
          layout: '0,3,5,1',
          image: 'http://static.tempdata.forkplayer.tv/staticfiles/fimg/forkicon.png',
          label: 'ForkPlayer',
          action: 'link:http://msx.lnka.ru/msx/distributive_forkplayer',
          selection: {
            important: true,
            action: 'update:content:description',
            data: {
              text: [
                '{txt:msx-white: ForkPlayer} — это прикладное программное обеспечение для просмотра fxml(Fork eXtensible Markup Language)-страниц в глобальной сети. ForkPlayer используют для запроса, обработки, манипулирования и отображения содержания fxml-сайтов а также для непосредственного просмотра содержания файлов плейлистов (m3u,xml,xspf), изображений (gif, jpeg, png), аудио-видео форматов (mp3, mpeg, mkv), потокового видео (udp, hls).',
              ],
            },
          },
        },
        {
          type: 'control',
          layout: '0,4,5,1',
          image: 'http://ott-play.com/android-chrome-192x192.png',
          label: 'OTT-Play',
          action: 'link:http://ott-play.com/f/',
          selection: {
            important: true,
            action: 'update:content:description',
            data: {
              text: [
                '{txt:msx-white: OTT-Play} — мультиплатформенный плеер IPTV, доступный на телевизорах, на ТВ-приставках и на мобильных устройствах.',
              ],
            },
          },
        },
        {
          type: 'control',
          layout: '0,5,5,1',
          image: 'https://ottplayer.es/public/images/logo_temp.svg',
          label: 'OTTplayer',
          action: 'link:http://widget.ottplayer.es',
          selection: {
            important: true,
            action: 'update:content:description',
            data: {
              text: [
                '{txt:msx-white: OTTplayer} — сервис, позволяющий собрать все ваше IP-телевидение в один плейлист, настроить порядок каналов, получить электронный телегид.',
              ],
            },
          },
        },
      ],
    },
  ],
});

if (process.env.URL) {
  const msxFolder = path.resolve(__dirname, '../build/msx');
  const msxConfig = createMSXConfig(process.env.URL);

  if (!fs.existsSync(msxFolder)) {
    fs.mkdirSync(msxFolder, { recursive: true });
  }

  fs.writeFileSync(`${msxFolder}/start.json`, JSON.stringify(msxConfig, null, 2), {});
}
