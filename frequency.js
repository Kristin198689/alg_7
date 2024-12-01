// Функция для построения частотного словаря
function buildFrequencyDict(text, alphabet = "english") {
  // Определяем алфавит
  let validChars = "abcdefghijklmnopqrstuvwxyz";
  if (alphabet === "german") {
    validChars += "äöüß";
  }

  // Приводим текст к нижнему регистру и фильтруем
  text = text.toLowerCase();
  const filteredText = text
    .split("")
    .filter((char) => validChars.includes(char));

  // Подсчитываем частоты
  const frequencyDict = {};
  filteredText.forEach((char) => {
    frequencyDict[char] = (frequencyDict[char] || 0) + 1;
  });

  return frequencyDict;
}

// Функция для построения графика частот
function plotFrequencyDict(frequencyDict) {
  // Преобразуем данные для графика
  const labels = Object.keys(frequencyDict);
  const data = Object.values(frequencyDict);

  // Найти canvas элемент
  const ctx = document.getElementById("frequencyChart").getContext("2d");

  // Построить график с помощью Chart.js
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Частота букв",
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

// Пример использования
const text = "Hallo! Wie geht es dir? Ich lerne Deutsch und Englisch.";
const alphabet = "german"; // или "english"

const freqDict = buildFrequencyDict(text, alphabet);
console.log("Частотный словарь букв:", freqDict);

// Построить график частот
plotFrequencyDict(freqDict);
