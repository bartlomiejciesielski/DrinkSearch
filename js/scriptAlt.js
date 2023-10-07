// WYSZUKIWARKA ZA POMOCĄ RegExp (WYRAŻENIA REGULARNE)

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

//RegExp- wyrażenie regularne. Pozwala na sprawdzenie dowolnego ciągu znaków, możemy wyfiltrować dowolne ciągi znaków. Można walidować formularze, sprawdzić czy adres mailowy wpisano poprawnie itp.
