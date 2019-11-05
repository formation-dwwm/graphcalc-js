#Contributing
les fichiers Javascript dans le dossier: /js

les fichiers CSS dans le dossier: /css

les fichiers images dans le dossier: /img

merci des bisous vous etes super j'en fait trop ne changer rien ^^

#Définition des touches:
- La touche entrée du clavier physique doit correspondre à la fonction égale.
- Les touches numériques  0-9, ".", opérateurs ainsi que les parenthèses sont identiques à celles du clavier virtuel
- La touche "p" correspond à la touche  "plus ou moins" du clavier virtuel
- La touche "g" affiche ou masque le graphique ce qui  correspond à "Graph" sur clavier virtuel 
- La touche escape pour tout effacer correspond à "AC" sur clavier virtuel
- La touche "BackSpace" pour  supprimer le dernier caractère correspond à "DEL" sur clavier virtuel

#Variables
	- userInput
		représente saisie utilisateur
		<string>
		valeur par défaut: ""
			- mise à jour lors appui touche
			- utilisé lors de =

	- screenData
		représente ce qui doit être affiché à l'écran (de calcul)
		<string>
		valeur par défaut: ""
		
	- currentMode
		"calc" | "graph"

#Fonctions
	- inputKeyPressed
		- Mettre à jour userInput
		- puis updateInputView

	- calculate =
		- = faire calcul depuis userInput
		- Mettre à jour screenData avec calcul + résultat
		- Mettre à jour userInput à sa valeur par défaut
		- updateScreenView
		- updateInputView
		- if (currentMode = "graph") {
			//?
			drawGraph ();
		  }

	- updateInputView
		- Mise à jour du contenu textuel de la zone de saisie à partir de userInput

	- updateScreenView
		- Mise à jour du contenu textuel de la zone de calcul à partir de screenData
		
	- toggleMode
		- currentMode !