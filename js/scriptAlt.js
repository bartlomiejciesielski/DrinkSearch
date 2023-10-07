// WYSZUKIWARKA ZA POMOCĄ RegExp (WYRAŻENIA REGULARNE). Pozwala na sprawdzenie dowolnego ciągu znaków, możemy wyfiltrować dowolne ciągi znaków. Można walidować formularze, sprawdzić czy adres mailowy wpisano poprawnie itp.

const input = document.querySelector('.search')
const liItems = document.querySelectorAll('li')

const filterList = () => {
	liItems.forEach(item => {
		const match = new RegExp(input.value, 'i').test(item.textContent) //flaga 'i' ignoruje rozrużnianie małych i dużych liter.
		if (!match) {
			item.style.display = 'none'
		} else {
			item.style.display = 'block'
		}
	})
}

input.addEventListener('keydown', filterList)


/*
OPIS DZIAŁANIA:

const input = document.querySelector('.search')
Tworzy zmienną input, która jest przypisana do elementu DOM o klasie "search". To oznacza, że kod zakłada, że na stronie istnieje element z klasą "search", na którym będzie można wprowadzać tekst do wyszukiwania.

const liItems = document.querySelectorAll('li')
Tworzy zmienną liItems, która zawiera kolekcję wszystkich elementów <li> na stronie. Zakłada się, że na stronie są elementy listy (np. elementy listy ul), które będą filtrowane na podstawie wprowadzonego tekstu.

const filterList = () => {
Definiuje funkcję o nazwie filterList. Ta funkcja będzie wywoływana, gdy użytkownik będzie wprowadzać tekst do pola "search".

liItems.forEach(item => {
Rozpoczyna pętlę forEach, która iteruje przez wszystkie elementy <li> (czyli listy elementów), które zostały wcześniej znalezione i przypisane do zmiennej liItems.

const match = new RegExp(input.value, 'i').test(item.textContent)
Tworzy nowy obiekt wyrażenia regularnego na podstawie wartości wprowadzonej przez użytkownika (input.value). Wyrażenie regularne zostaje utworzone z flagą 'i', co oznacza, że wyszukiwanie jest nieregisterowane, czyli jest nieczułe na wielkość liter. Następnie używa metody test(), aby sprawdzić, czy treść tekstu zawartej w danym elemencie <li> (czyli item.textContent) pasuje do wyrażenia regularnego. Wynik tego sprawdzenia zostaje przypisany do zmiennej match.

if (!match) {
Rozpoczyna warunek if, który sprawdza, czy zmienna match jest fałszywa, co oznacza, że wprowadzony tekst nie pasuje do tekstu zawartego w danym elemencie <li>.

item.style.display = 'none'
Jeśli warunek z linii 6 jest spełniony, to znaczy, że tekst nie pasuje, więc ustawiana jest właściwość CSS display elementu na 'none', co powoduje, że element zostaje ukryty na stronie.

} else {
Rozpoczyna blok else, który jest wykonywany, jeśli warunek z linii 6 nie jest spełniony, co oznacza, że tekst pasuje.

item.style.display = 'block'
Jeśli warunek z linii 6 nie jest spełniony, to znaczy, że tekst pasuje, więc ustawiana jest właściwość CSS display elementu na 'block', co powoduje, że element jest widoczny na stronie.

})
Kończy pętlę forEach, która iteruje przez wszystkie elementy <li>.

input.addEventListener('keydown', filterList)
Dodaje nasłuchiwanie na zdarzenie "keydown" na elemencie input (czyli na polu do wprowadzania tekstu "search"). Kiedy użytkownik wprowadza tekst, funkcja filterList zostaje wywołana, co spowoduje ponowne przefiltrowanie listy elementów <li> na stronie na podstawie wprowadzonego tekstu.

To jest ogólny opis działania tego kodu. W praktyce ten kod umożliwia filtrowanie elementów listy na stronie na podstawie wprowadzonego tekstu w czasie rzeczywistym. Jeśli wprowadzony tekst nie pasuje do żadnego elementu listy, to te elementy są ukrywane, a jeśli pasuje, to są wyświetlane.
*/