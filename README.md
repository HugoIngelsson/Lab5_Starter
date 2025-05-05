# Lab 5 - Starter
Group Member: Hugo Ingelsson

Expose: [https://hugoingelsson.github.io/Lab5_Starter/expose.html](https://hugoingelsson.github.io/Lab5_Starter/expose.html)
Expand: [https://hugoingelsson.github.io/Lab5_Starter/explore.html](https://hugoingelsson.github.io/Lab5_Starter/explore.html)

### 1
> Would you use a unit test to test the "message" feature of a messaging application? Why or why not?

I wouldn't use a unit test to test this functionality because it is way too broad of a functionality to test as a unit test. The "message" feature probabily relies on several different parts of the application, so a single change in any one of those parts might change the functionality and interactions between sections of the application.

### 2
> Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?

This would be a great feature to test with unit tests. The functionality can be checked with only a few tests that all run on a small scale, such as checking with a long message, a short message, checking what happens when a user deletes some characters and then types again, etc. It seems like a fairly standalone feature, which makes it a good target for unit tests.