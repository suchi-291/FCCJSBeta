## Summary

**User Events:**
1. Enter characters - input value is taken to variable - character defined inside myPyramid function.
2. myPyramid function is called when the generate pyramid is clicked
3. User can choose whether he wants non-iverted pyramid or inverted pyramid, the vaalues are taken using option1.checked, option2.checked
4. After clicking on reset, hidden class is added to the pyramid.

**Concepts Learnt:**
HTML tags, &nbsp is used for spaces on html
.checked is used to identify if a radial button is clicked
.classlist, .add, .remove come in very handy when we have to hide things

To add a video as background, we can use 
```html
<video id="myVideo" autoplay muted loop>
        <source src="media/myVideo.mp4" type="video/mp4" />
</video>
```

and then set the css properties.
```css
.myvideo{
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  z-index: 0;
```
