# Ассеты Grand Save Orange

## Пользовательские оригиналы

- `docs/references/apelsin-mark.webp` — знак и оранжевый цвет, предоставленные пользователем. Референс сумки курьера; оригинал не изменён.
- `docs/references/card.png` — карта, предоставленная пользователем. Игра загружает оригинал через Vite, сохраняя содержимое и пропорции.

## Персонажи T13

Созданы 2026-11-16 встроенным инструментом OpenAI imagegen для этого проекта, без сторонних стоковых изображений. Знак основан на пользовательском референсе; отдельная лицензия стороннего автора для сгенерированных иллюстраций не заявляется.

| Файл | Экспорт PNG RGBA | Размер в игре | Содержание |
|---|---|---|---|
| `images/courier.png` | 120 × 216 | 30 × 54 | Курьер на электровелосипеде, оранжевая сумка с белым знаком сверху |
| `images/truck.png` | 256 × 448 | 64 × 112 | Грузовик с открытым задним проёмом, распахнутыми дверями и грузом |

Оба смотрят вверх, выполнены в ярком 2D-стиле с тёмным контуром, оранжевыми, кремовыми и бирюзовыми деталями. Прозрачные поля удалены по границе альфа-канала > 16; затем изображения экспортированы в четырёхкратный игровой размер (Sharp, без добавления зависимости в проект). Содержимое не дорисовывалось при экспорте. Незначительная подгонка пропорций сохраняет прежнюю игровую геометрию.

Курьер использует прямоугольную огибающую силуэта 30 × 54 без внешних прозрачных полей: она охватывает руки, сумку и колёса. Это прежняя область Arcade overlap; выстрел начинается перед передним колесом, границы дороги и гарантия прохода остаются прежними. У грузовика нет физического тела: он по правилам не наносит урон и не принимает попадания. Его видимая огибающая 64 × 112 включает двери; карта появляется за её нижним краем.

### Промпты

Референсы: для первого курьера — `docs/references/apelsin-mark.webp`; для правки — первый сгенерированный курьер; для грузовика — первый курьер как референс стиля.

#### Курьер: исходная генерация

```text
Use case: stylized-concept. Asset type: isolated production 2D arcade game sprite.
Create ONE courier riding an electric bicycle, moving straight UP toward the top of the image, seen strictly from directly overhead (bird's eye orthographic, zero side view). Full bicycle and rider visible, centered in a tall narrow silhouette with width:height approximately 30:54. Transparent background; no ground, shadow, scenery, labels, motion trail, border or extra objects.
Bright clean hand-drawn 2D arcade style with bold dark navy outlines, flat orange and cream fills, a few simple highlights, readable when rendered only 30 by 54 pixels. Two dark tires aligned vertically, front wheel at top, handlebars and rider's helmet above the large insulated delivery backpack; small electric battery/frame detail visible. Rider in teal jacket. LARGE square vivid orange delivery bag on rider's back occupies much of the central lower silhouette. On the upward-facing top surface of that bag, draw the supplied reference's exact white mark: a simple wide white bowl/semicircle with horizontal flat top and smoothly rounded lower edge. No other logos or text. The reference is only the brand mark and orange color, not a background or an edit target. The mark should be large, unobstructed and immediately readable from above. Compact symmetrical silhouette, no empty padding beyond a thin transparent margin. Do not draw spokes or tiny texture.
```

#### Курьер: правка пропорций

```text
Use case: precise-object-edit. Edit target: the supplied courier game sprite. Change ONLY the silhouette proportions to fit a 30:54 (5:9) width-to-height rectangle when tightly cropped. The current sprite is too tall and skinny. Make BOTH exposed wheels much shorter, bring front wheel close to handlebars, and bring rear wheel close to the bag; shorten the front and rear chassis. Target whole opaque silhouette is 60% as wide as it is tall, compact and squat, NOT a long thin bicycle. Keep the same directly overhead view facing UP, orange helmet, teal sleeves, orange backpack with exact unobstructed white bowl mark and bold dark navy outlines. Keep one single isolated courier on a genuinely transparent background, no ground shadow. Keep details simple enough for 30x54 pixel gameplay. Do not crop any wheel off. Do not add anything.
```

#### Грузовик

```text
Use case: stylized-concept. Asset type: isolated production 2D arcade game sprite.
Create ONE delivery box truck driving straight UP, viewed from directly overhead, orthographic, matching the reference courier's bright clean 2D arcade style: bold dark navy outlines, flat orange/cream/teal, a few broad highlights, no texture. Reference image is style reference only, do NOT include a rider or bicycle.
Whole compact truck silhouette approximately width:height 64:112, centered; transparent background, NO ground, shadows, border, labels or scenery. Top is the cab/front, bottom is rear. Orange cab, broad dark teal windshield, black tires, cream cargo box. At the BOTTOM visibly show the OPEN rear cargo doorway: dark rectangular interior with a few simple orange parcel shapes visible; two cream rear door leaves swung outward/back, kept compact within the full 64:112 silhouette. Use a readable shallow top-down cutaway at rear to make the open doorway obvious. Large simple forms, readable at only 64 by 112 pixels. Single truck only, no logos or text, no speed lines. Leave only a thin transparent margin.
```

## Дорога и объекты T14

Созданы 2026-11-17 встроенным OpenAI imagegen для этого проекта. Сторонние стоки не использованы. Перед генерацией осмотрены пользовательские оригиналы и готовые персонажи T13; стиль задан текстом промптов (без передачи изображений инструменту). Исходные пользовательские файлы и персонажи T13 не изменены.

| Файл / кадр атласа | Экспорт | Размер в игре | Содержание |
|---|---|---|---|
| `images/road.png` | 780 × 960, непрозрачный PNG, палитра 128 цветов | повтор 390 × 480 | Асфальт, разметка, тротуары с клумбами |
| `images/objects.png` + `objects.json` | 340 × 770 RGBA, штатный JSON Hash atlas Phaser | кадры ниже | 2 px прозрачного поля вокруг кадров |
| `box` | 168 × 168 | 42 × 42 | Коричневая коробка с лентой, разрушается |
| `barrier` | 336 × 112 | 84 × 28 | Полосатый бетонный барьер |
| `car` | 336 × 112 | 84 × 28 | Припаркованная поперёк дороги машина |
| `packages` | 144 × 144 | 36 × 36 | Бирюзовый бокс «+5» |
| `life` | 144 × 144 | 36 × 36 | Кремовая аптечка с бирюзовым плюсом |
| `package` | 48 × 64 | 12 × 16 | Летящий оранжевый пакет |

### Подготовка экспорта

Sharp из уже установленного окружения, без новой зависимости проекта. У каждого объекта удалены прозрачные поля по alpha > 16; огибающая уменьшена до четырёхкратного игрового размера с небольшой подгонкой пропорций. Рисунок не дорисовывался. Кадры без trim/rotation, собраны вертикально с прозрачными промежутками; исходная прозрачность сохранена.

Дорога сгенерирована 1599 × 984. Её вертикальные полосы `(x, ширина)` = `(0,169), (169,17), (186,1227), (1413,17), (1430,169)` экспортированы соответственно шириной `90,12,576,12,90` и высотой 480 px. Это совмещает тротуары и кромки с прежними границами x=45..345 и внутренними линиями x=51..339. К получившейся половине добавлена её вертикально отражённая копия: верх и низ повторяемой текстуры совпадают пиксель в пиксель. Экспорт в непрозрачную палитру 128 цветов без dithering сократил PNG примерно с 816 до 103 КБ. Окружение не попадает на проезжую часть. Texture scale 0,5; прокрутка учитывает масштаб и движется с препятствиями.

Размеры баланса, генератор, интервалы и правила контактов сохранены. Барьер и машина — две картинки одного тяжёлого препятствия: машина показывается в правом коридоре, остальные тяжёлые — барьеры, без дополнительной случайности. Прямоугольные области контакта соответствуют огибающим видимых силуэтов; небольшие скругления, ручки и зеркала входят в огибающую. Изображения не имеют внешних теней или широких прозрачных полей. Arcade-тела синхронизируются сразу после `setDisplaySize`; попадания пакетов, размещение предметов и удаление за экраном используют отображаемые размеры. Сбор/пополнение/разрушение по-прежнему убирают объект, удар мигает курьером; дополнительных вспышек и частиц нет.

Карта продолжает загружаться из пользовательского оригинала с исходными пропорциями, градиентом и знаком.

### Полные промпты T14

#### road

```text
Use case: stylized-concept. Asset type: vertically repeating 2D arcade road texture. Create one rectangular straight road tile, strict orthographic directly overhead, bright clean hand-drawn flat 2D style, dark navy outlines and restrained teal/cream/orange palette matching the supplied courier and truck style. The intended tile is 390 wide by 240 tall. Road asphalt occupies x=45 through x=345 (300/390 of width), perfectly straight parallel vertical sides; outer 45/390 strips are cream paved sidewalks with tiny teal planted beds and orange paving accents wholly OUTSIDE the road. Muted dark blue gray asphalt, subtle broad texture, no busy marks or cracks. Cream continuous edge lines 6/390 wide just inside road boundaries. One thin dashed cream center line at x195: repeat 48-tall dashes every120 units. Make top and bottom edges join seamlessly when repeated vertically; no perspective, horizon, bend, cars, obstacles, people, text, logos, shadows or UI. Flat opaque background, edge to edge tile; environment must never intrude into driving space.
```

#### box

```text
Use case: stylized-concept. Asset type: isolated top-down production 2D arcade obstacle sprite. ONE square closed corrugated cardboard parcel/crate, straight orthographic from directly overhead, square width:height 1:1 silhouette, brown kraft faces, clear cream packing tape cross, slightly scuffed corners. Bold dark navy outline, flat broad fills and a few highlights matching supplied courier/truck sprites. It must read as a breakable obstacle at 42x42 pixels. Centered, genuinely transparent background, no ground shadow, no labels or text, no logo, no other objects, no padding beyond a thin transparent margin. Full square silhouette with nearly square corners; no isometric side faces.
```

#### barrier

```text
Use case: stylized-concept. Asset type: isolated top-down production 2D arcade heavy obstacle sprite. ONE solid wide horizontal concrete road barrier, width:height exactly 3:1, strict directly overhead orthographic view. Solid rectangular silhouette with very slightly rounded corners; cream concrete with broad dark navy and orange diagonal hazard stripes, dark navy outline, visible dark bolt caps at ends. Bright clean hand-drawn flat 2D style matching supplied courier/truck. Readable at84x28pixels, clearly unbreakable, low rectangular slab distinct from square cardboard parcel. Transparent background, no shadow, ground, feet beyond rectangular envelope, text, logo, other objects or large padding.
```

#### car

```text
Use case: stylized-concept. Asset type: isolated top-down production 2D arcade parked heavy obstacle sprite. ONE compact parked teal car facing RIGHT, strict directly overhead orthographic view, full exterior including tires fits a horizontal width:height 3:1 silhouette. Broad roof, cream windshield highlights, dark navy windows and outline, teal body, cream bumpers. Clean bright hand-drawn flat 2D style matching supplied courier/truck. Readable at84x28pixels. Shape fills its rectangular envelope with only slight corner rounding, no large empty gaps. Transparent background, no ground shadow, road, motion trails, labels, logos, other objects or padding.
```

#### packages

```text
Use case: stylized-concept. Asset type: isolated top-down production 2D arcade beneficial refill sprite. ONE compact square rounded TEAL supply case viewed directly overhead, width:height1:1. Broad pale mint lid, bold dark navy outline, teal rim with clipped rounded corners. Center of lid has a very large dark navy '+5' symbol, exact text '+5', thick simple lettering occupying most of lid. Small orange parcel pictogram below lettering if space allows. It must read as a useful pickup at36x36pixels and be unmistakably different in shape, material and symbol from a brown cardboard box. Clean hand-drawn flat bright 2D style matching supplied courier/truck, no tiny texture. Transparent background, no ground, shadow, labels outside the object, extra objects or padding.
```

#### life

```text
Use case: stylized-concept. Asset type: isolated top-down production 2D arcade life pickup sprite. ONE square compact cream first-aid case seen directly overhead, width:height1:1, gently rounded corners, thick dark navy outline, orange rim, a large TEAL medical PLUS symbol filling the lid. Clean hand-drawn flat bright 2D arcade style matching supplied courier/truck, broad simple forms, readable at36x36pixels. Distinct from brown cardboard obstacles and teal '+5' supply case. Transparent background, no ground shadow, no heart floating above, labels, extra objects or padding.
```

#### package

```text
Use case: stylized-concept. Asset type: isolated top-down production 2D arcade flying delivery bag projectile sprite. ONE small orange paper delivery bag flying straight UP, strict overhead view, width:height3:4 compact rectangular silhouette including short dark handle at top. Broad orange face, cream packing fold, thick dark navy outline, one simple cream highlight. Bright clean hand-drawn flat 2D style matching supplied courier/truck, readable at12x16pixels; no writing or tiny details. Transparent background, no ground shadow, no motion trail, glow, scene, logos, other objects or padding.
```


## Звуковые эффекты T15

Созданы 2026-11-17 программным синтезом в `src/audio.ts` через Web Audio API. Сторонние записи, библиотеки, аудиофайлы и лицензии для них не используются.

| Событие | Тембр | Частоты, Гц | Длительность |
|---|---|---|---|
| Карта | Синус | 880 → 1320 | 120 мс |
| Выстрел | Треугольник | 640 → 160 | 70 мс |
| Коробка | Прямоугольник | 180 → 45 | 130 мс |
| Удар | Пила | 110 → 55 → 70 | 220 мс |
| Пакеты | Треугольник | 440 → 660 → 440 → 880 | 240 мс |
| Жизнь | Синус | 523 → 659 → 784 → 1047 | 360 мс |

Амплитуда каждого голоса ограничена 0,065, атака 5 мс, затем плавное затухание до нуля. Частоты переключаются равными шагами. Одновременно звучит не больше одного голоса каждого события; повтор заменяет предыдущий. Узлы останавливаются и отсоединяются при завершении, паузе, фоне, mute и перезапуске. Последний удар звучит после открытия результата; уход в фон останавливает и его.

Один AudioContext создаётся только после действия игрока, сохраняется между попытками и закрывается при уничтожении сцены. Встроенное аудио Phaser отключено, чтобы не создавать второй контекст до действия игрока. Недоступные и заблокированные события пропускаются без отложенного воспроизведения; следующее действие повторяет запуск. Настройка `sound` использует существующее сохранение версии 1. Музыка T16 описана ниже.

Пользователь прослушал запись шести эффектов из реального выхода Web Audio и подтвердил различимость и приемлемое звучание 2026-11-17; запись частых/одновременных событий также подтвердил 2026-11-17. Это проверка записи, а не всех игровых сочетаний на реальных телефонах.


## Музыка T16

- Трек: **Bring Me The Energy**, автор **Pumpupthemind**. Credit: Music by Pumpupthemind.
- [Страница оригинала](https://pixabay.com/music/funk-bring-me-the-energy-163407/), MP3, опубликован 2023-08-24; страница указывает Pixabay Content License. Проверено 2026-11-17.
- Файл `audio/bring-me-the-energy.mp3` передан пользователем 2026-11-17 после запроса штатного скачивания с этой страницы. В автоматизированном браузере кнопка Free download не завершилась из-за Cloudflare Turnstile (`Error getting turnstile token`); ограничения не обходились.
- Полученный оригинал скопирован без перекодирования и обрезки: 2 659 056 байт, стерео, 44 100 Гц, 256 кбит/с, около 83,1 с. SHA-256: `2a2645265aaa617c2616652e2f20ac9bf6d917234f18dbe1342ffca337894a85`.
- Действующие на дату получения условия проверены по [Pixabay Content License — краткое описание](https://pixabay.com/service/license-summary/) и [полным условиям](https://pixabay.com/service/terms/), разделы 5–6, 8. Разрешены бесплатное коммерческое/некоммерческое использование и адаптация; указание автора необязательно, здесь сохранено. Запрещены самостоятельная перепродажа/распространение неизменённого контента, вводящие в заблуждение заявления об авторстве и другие перечисленные запрещённые применения. Дополнительные права третьих лиц лицензия не гарантирует. Здесь трек входит в игру; отдельная музыкальная библиотека не создаётся.
- Локальная загрузка учитывает `BASE_URL`; Web Audio декодирует файл один раз, один источник повторяет буфер. Пауза/mute сохраняют позицию, restart обнуляет её. Общий выключатель использует прежний `sound`, громкость музыки — 0,035, эффекты T15 сохранены.

Пользователь прослушал записи реального выхода Web Audio `mix.wav` и `seam.wav` и подтвердил различимость эффектов на фоне музыки и приемлемость стыка 2026-11-17: «Да, микс и стык подходят». Это проверка записей, без проверки на реальных телефонах.
