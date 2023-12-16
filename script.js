const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwCL5TxgOaXn5I4MSgOKF5utO4rZ2kRwV7EWBxDakYMUM7zO_h3VfxTzKZQC1VspLDT/exec", {
      method: "POST",
      body: new FormData(form),
    });

    const data = await response.json();

    if (data.result === "success") {
      alert("Registrasi berhasil. Terima kasih sudah mendaftar.");
      window.location.reload();
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error("Error! Something's wrong", error.message);
    alert("Registrasi Gagal!! Silahkan coba lagi.");
  }
});