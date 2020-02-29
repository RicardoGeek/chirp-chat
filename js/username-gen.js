var animal = [
    'panda',
    'flamengo',
    'elephant',
    'dog',
    'cat'
]

var moods = [
    'angry',
    'grateful',
    'bored',
    'happy',
    'furious'
]

function getName() {
    var animalName = animal[Math.floor(Math.random() * animal.length)]
    var moodName = moods[Math.floor(Math.random() * moods.length)]

    return moodName + ' ' + animalName
}