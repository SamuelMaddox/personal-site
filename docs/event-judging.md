# Event Judging
[Back to Homepage](index.md)
<br />
<br />
<br />

![Event Judging 0](/event-judging/0-example-setup.jpg)
We created a judging application to help manage the judging process for hackathons; and was designed to be reusable for other events. This picture shows a bracket on the big screen, and the smaller laptops were handed out to judges to take notes and submit rankings
<br />
<br />
<br />

![Event Judging 1](/event-judging/1-empty-bracket.png)
This screen is the bracket page that displayed the results of judging on the main stage. Teams were divided up evenly across 2 stages. The teams were then split up further into clusters of 5 teams apiece.
<br />
<br />
<br />


![Event Judging 2](/event-judging/2-partial-bracket.png)
When a winner for a cluster was determined they would be displayed in the middle column. Their cluster would also disappear, moving the next cluster up as the current cluster being judged on that stage.
<br />
<br />
<br />

![Event Judging 3](/event-judging/3-full-bracket.png)
Once the middle column was full, and all the winners displayed in the middle column, the process would start again for round 2. Teams that were previously on red stage would get moved to blue, and vice versa, assuring that every winner that made it to the final round was judged by every judge.
<br />
<br />
<br />

![Event Judging 4](/event-judging/4-full-bracket-final-round.png)
For the final round, the top 5 teams would get judged by a new panel of executive judges who would determine the final rankings.
<br />
<br />
<br />

![Event Judging 5](/event-judging/5-judge-waiting-to-start.png)
This screen is what judges would see. Each judge had their own chromebook. First they would see a loading screen before judging started.
<br />
<br />
<br />

![Event Judging 6](/event-judging/6-judging-initial-state.png)
Once judging started judges would see this screen. On the right is judging criteria. On the left is a list of each team, with a textbox where judges can take notes.
<br />
<br />
<br />

![Event Judging 7](/event-judging/7-comments-being-saved.png)
Any notes that judges entered were automatically saved to a backend server (as indicated by the saving account that is above the text box). Page refreshes would not cause a loss of notes.
<br />
<br />
<br />

<!-- ![Event Judging 8](/event-judging/8-comments-saved.png)
<br />
<br />
<br /> -->

![Event Judging 9](/event-judging/9-quick-notes.png)
Checkboxes below the comments field are associated with the requirements on the right. Judges could check these off if they felt a team met those requirements.
<br />
<br />
<br />

![Event Judging 10](/event-judging/10-ranking-team.png)
After all teams have presented judges could rank the teams. As soon as the first team was ranked the panel on the right automatically swapped to a rankings list where a judge could see their rankings listed in order. Once a rank was selected for one team (Ex: Task Unit Solutions) the rest of the teams had that ranking dimmed (Ex: Imposter Syndrome). However, that ranking could still be selected for a different team resulting in the previous team to have no ranking and their spot replaced on the list to the right. To deselect a ranking, a Judge could select the x on the right, or click on the blue circle rank button which would cause it to be de-selected.<br />
<br />
The judges didn't have time to play with the app before using it. The idea was to make it easy enough to use that no time was wasted on learning how to use it.
<br />
<br />
<br />

![Event Judging 11](/event-judging/11-rank-submitted.png)
Once all the teams were ranked a judge would submit their ranks, at which point they would be shown a screen that said "waiting on the other judges to submit their ranks". If the rankings resulted in a tie only the tied teams would show up with the judge's previous notes where the judges could submit the rankings for only the tied teams.
<br />
<br />
<br />

[Back to Homepage](index.md)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[Back to Top](#event-judging)
