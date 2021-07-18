# Aspect Ratio Calculator

This tool will help you calculate aspect ratios and pixel dimensions of images and videos. This can be used to ensure that you are working at the correct resolution.

```
Widescreen (16:9)
Square (1:1)
Social (4:5)
Portrait (9:16)
```

#### Install
```
npm install --save @awesome-typescript/calculate-aspect-ratio
```

#### How to use
```
import { aspectRatio, isLandscape, isPortrait, isStory, isSquare } from '@awesome-typescript/calculate-aspect-ratio'

aspectRatio(640, 360) // 16:9
aspectRatio(640, 640) // 1:1
aspectRatio(1080, 1350) // 4:5
aspectRatio(720, 1280) // 9:16

isLandscape(640, 360)
isPortrait(1080, 1350)
isStory(720, 1280)
isSquare(640, 640)
```
