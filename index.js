
    function searchJob() {
      const input = document.getElementById("searchInput").value;
      if (input.trim() !== "") {
        alert("Mencari pekerjaan: " + input);
      } else {
        alert("Masukkan kata kunci pencarian.");
      }
    }

