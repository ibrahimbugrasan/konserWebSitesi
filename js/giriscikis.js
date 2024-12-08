// Kullanıcılar
const users = [
    { username: "admin1", password: "1234" },
    { username: "admin2", password: "5678" }
  ];
  
  // Biletler
  let tickets = [
    { id: 1, name: "Taylor Swift", date: "2024-12-20", price: 250 },
    { id: 2, name: "Kenan Doğulu", date: "2024-12-22", price: 180 },
    { id: 3, name: "The Weekend", date: "2024-12-25", price: 350 },
    { id: 4, name: "Ceza", date: "2024-12-28", price: 150 },
    { id: 5, name: "Travis Scott", date: "2024-12-30", price: 300 }
  ];
  
  // Giriş Yapma
  function login() {
    console.log("Giriş yap butonuna tıklandı!");  // Debug için ekledik
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      document.getElementById("login").style.display = "none";
      document.getElementById("adminPanel").style.display = "block";
      renderTickets();
      renderChart();
    } else {
      document.getElementById("loginMessage").innerText = "Kullanıcı adı veya şifre yanlış!";
    }
  }
  
  // Çıkış Yapma
  function logout() {
    document.getElementById("login").style.display = "block";
    document.getElementById("adminPanel").style.display = "none";
  }
  
  // Bilet Tablosunu Yenileme
  function renderTickets() {
    const table = document.getElementById("ticketTable");
    table.innerHTML = "";
  
    tickets.forEach(ticket => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${ticket.id}</td>
        <td>${ticket.name}</td>
        <td>${ticket.date}</td>
        <td>${ticket.price} TL</td>
        <td>
          <button onclick="deleteTicket(${ticket.id})">Sil</button>
        </td>
      `;
      table.appendChild(row);
    });
  }
  
  // Bilet Ekleme
  function addTicket() {
    const name = document.getElementById("newConcertName").value;
    const date = document.getElementById("newConcertDate").value;
    const price = parseFloat(document.getElementById("newConcertPrice").value);
  
    if (name && date && !isNaN(price)) {
      tickets.push({
        id: tickets.length + 1,
        name,
        date,
        price
      });
      renderTickets();
    }
  }
  
  // Bilet Silme
  function deleteTicket(id) {
    tickets = tickets.filter(ticket => ticket.id !== id);
    renderTickets();
  }
  
  // Grafik Render
  function renderChart() {
    const ctx = document.getElementById("salesChart").getContext("2d");
    const data = {
      labels: tickets.map(t => t.name),
      datasets: [{
        label: "Bilet Fiyatları",
        data: tickets.map(t => t.price),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }]
    };
  
    new Chart(ctx, {
      type: "bar",
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }