/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

/* const generateList = (stringArray) => {
  return (
    "<ul>" +
    stringArray.toString(
      stringArray.forEach((item) => {
        return "<li>" + stringArray.toString(item) + "</li>";
      })
    ) +
    "</ul>"
  );
}; */

const generateList = (stringArray) => {
  return (
    "<ul>" +
    stringArray.map((item) => {
      return "<li>" + item + "</li>";
    }) +
    "</ul>"
  );
};
