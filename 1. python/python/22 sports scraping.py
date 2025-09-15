
from pycricbuzz import cricbuzz
from tkinter import *

root=Tk()
root.title("live circket score")

root.geometry("1000x850")



cb = cricbuzz
match =cb.CricbuzzS

score = cb.livescore(match[0]['id'])
commentary = cb.commentary(match[0]['id'])
score_board = cb.scoreboard(match[0]['id'])
for a in score:
    print(a)
    for b in score(a):
        print(b,':',score[a][b])
       
s=str(score_board)
k=s.repalce(",","\n")

score1=Label(root,font=("time",15,"bold"),bg="white",text=k)
score1.grid(row=2,column=2,pady=25,padx=100)


root.mainloop()










