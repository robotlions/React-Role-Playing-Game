# B.R.I.D.G.E. - Buildable, Retro-Inspired Digital Game Engine
A game engine and builder inspired by 90s text-driven fantasy RPGs.
Built in ReactJS and Django.
Although this is more of a demonstration of the game engine rather than the
game content, BRIDGE is playable, with 30 rooms to explore, two character classes,
a handful of weapons and a limited arsenal of spells.

Includes code for building rooms, mobs(monsters), spells and items
in-game. Builder commands also include JavaScript functions for navigating
rooms, healing characters, conjuring items, summoning mobs, and other
functions useful for game-content-creators.

The newly implemented DEMO mode is fully playable, but does not allow
for saving characters. Players can still create an account, which gives them the
ability to create and save characters.

Although this version of the game is fantasy-themed, the engine is modular, and
future devs can easily tailor the game by changing database entries for rooms, weapons,
items, monsters and spells.

The game is designed to run on the web in a browser and can be found at:
rpg-final-project.herokuapp.com

Contributors are welcome to download the code and run on a local machine.
After cloning the repo, in frontend/static:
```
npm install react
```
then
```
npm start
```

To use the database locally. In the main directory:
```
pipenv shell
python manage.py runserver
```

Note: the backend requires several dependencies:

```
django django-allauth django-restauth django-rest-framework dj-database-url pillow gunicorn whitenoise
```

TO DO: Add rooms, weapons, spells and character classes. Also need to flesh out
character level-up system. The code currently allows characters to advance to
level 3. Future code will go up to 90.

CREATOR REALIZATION WHILE WRITING THIS README: Instead of making hard-coded experience
values for going up levels, I should write a function that makes each level
requirement a constant mathmatical value, so the levels can actually be determined by
a single function or a series of small functions rather than a massive table
from 1-90 with each level specifically defined. But then how do you distribute
spells and abilties gained through levels? I don't know, but I'll figure it out.
