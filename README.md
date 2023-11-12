
# Streamly
This was a mini-project that was inspired by twitch. I was doing a bit of researching and I found out that it is possible to screen record with pure javascript. I then thought that if it is possible to screen record than it must be possible to stream your screen.
See it in action: https://streamly-rmgv.onrender.com

![image](https://github.com/JimmieLB/streamly/assets/60014163/a2e7f06e-a41d-44d8-996a-1aadc972f247)
![image](https://github.com/JimmieLB/streamly/assets/60014163/7b5e3f2b-070e-443e-8268-ec808f52622b)

###  Built With  
* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]


###  Future Goals
I will probably not come back to this project, however I do have some ideas of what I would do differently if I were to come back.

The only major thing I would change is the data type for the video that is sent to the server. Currently I use data urls to send the video frame by frame to the server. This causes poor quality and poor frame-rate for the viewer. I would have to research better options but currently I believe sending some sort of small video that's slowed very slightly so it could be reconstructed on the viewer's client would be best.
