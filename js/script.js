/*
Wskazówki
Zastanów się jakich elementów będziesz potrzebował/a (jakie elementy będziesz musiał/a pobrać za pomocą np. querySelectora).

Stwórz funkcję, która będzie się odpalała, kiedy wpiszemy coś do inputa.

Funkcja ma porównywać to, co wpisaliśmy w inputa z każdym napojem na liście.

Za pomocą instrukcji warunkowej sprawdź, czy dane z inputa pokrywają się z nazwą napoju. Jeśli nie, ukryj taki napój.

Żeby aplikacja działała poprawnie, musimy się zabezpieczyć. Użytkownik może podać nazwę napoju dużymi lub małymi literami. Musimy więc sprowadzić to, co wpisuje użytkownik do np. małych liter (tak samo trzeba zrobić z listą napojów).



Podpowiedzi do wskazówek
Trzeba będzie stworzyć 2 zmienne, które będą przechowywały inputa oraz listę napojów (wszystkie <li>).

addEventListener na event 'keyup'.

Chcemy przeszukać całą listę napojów i na każdym z nich wykonać dokładnie tę samą funkcję. Brzmi jak zadanie dla pętli, prawda? ;)

Warto też zauważyć, że skoro pobraliśmy wszystkie <li> do jednej zmiennej, to mamy obiekt tablico podobny – idealnie! Pętle z tablicami się przecież bardzo lubią. :)

Co więcej, mamy taką metodę (coś z indeksem w nazwie), która sprawdza, czy jakiś znak / jakieś znaki są w danym stringu. Jeśli nie ma, to zwraca wartość -1.

Jeśli coś zwróci -1 to taki napój należy ukryć. display: none; robi robotę. ;)

Mamy takie dwie fajne metody – toUpperCase lub toLowerCase. :)
*/

const search = document.querySelector('.search')
const li = document.querySelectorAll('li')

const searchEngine = e => {
	//będziemy kożystali z inputa, dlatego należy dodać event jako argument (e)
	// funkcja ma zadanie przechwycić zawartość input-a
	const text = e.target.value.toLowerCase() //zapis .toLowerCase zabezpiecza nas przed rozeużnianiem małych i dużych liter zastępując wszystkie małymi.
	// console.log(text)

	li.forEach(el => {
		// console.log(el.textContent) //dzięki takiemu odwołaniu otrzymujemy całą zawartość listy ul, wszystkie elementy li (lista dostępnych napojów).
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			//zapis ten sprawia że wszystkie elementy listy (napoje) zostają zapisane małymi literami, potem za pomocą metody indexOf sprawdzamy czy zawierają znaki wpisane w wyszukiwarce.
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}
search.addEventListener('keyup', searchEngine)

//DODATKOWE NOTATKI:
//jeżeli szukamy za pomocą metody .indexOF('a') i dana wartość znajduje się w tablicy, uzyskamy jej indeks. Jeżeli dana wartość nie występuje w tablicy, zawsze uzyskamy wartość -1.
/*
PODSUMOWANIE:
1. listener nasłuchuje na zmiany w inpucie,
2. e.target wskazuje na input, e.target.value na jego zawartość, czyli tekst który wpisujemy,
3. zmienna li przechowuje wszystkie napoje
4. el odnosi się do każdego li na liście.
*/