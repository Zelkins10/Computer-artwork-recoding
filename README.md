# Algorithmic Aesthetics recoding project
Based on [*Computer Composition With Lines* by A. Michael Noll](http://dada.compart-bremen.de/item/artwork/5).


## Pseudo-code

- **For** coordinate points inside the circle at the top left **do**
  - **For** coordinate points inside the superimposed ~~circle~~ *parabola* **do**
    - **Draw** a rectangle of randomly chosen size in a small interval and randomly chosen orientation between vertical and horizontal *, except for side rectangles which must be vertical*
    - **Move** to the next position
  - **Draw** a rectangle of randomly chosen size in a bigger interval and randomly chosen orientation between vertical and horizontal
  - **Move** to the next position

- **Repeat** these instructions for the next 3 circles, while gradually increasing intervals (or using other strategies such as Gaussian distribution)

## Link to the recoded artwork

https://zelkins10.github.io/Computer-artwork-recoding/
