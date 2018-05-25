Any folder that is in our server folder

client - auto bundled and shipped to browser

server - withheld and ran on server

imports -- shared between client then server -- instatiated first

server - publish sets of record and make availbe to front end react  App

react can subscribe to collections that are being produced by the meteor back end

purpose of PUBLISH and SUBSCRIBE is to pair down the data to a very small slice
so that client side does not crash from overload of records meteor by default comes with insecure package with publish all data to anyone

subscription is asking for data available

react access to subs by setting a container watches subs and passes info to a component when data changes

callback function is called inside of the otherFunction - otherFunction() => {}
and a scope inside the otherFunction and globally.

flex-box - better for responsive every element make a container and do stuff

we use component level state only to cause or component to re-render
--in this case clicking on a button should not cause the page to re-render
It should only re-render when subscription updates
