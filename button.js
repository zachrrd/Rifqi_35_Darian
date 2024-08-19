function toggleDetails(id) {
    var detailTable = document.getElementById(id);
    var button = Event.target;
    detailTable.style.display = (detailTable.style.display === 'none') ? 'table' : 'none';
    button.textContent = (detailTable.style.display === 'none') ? 'Lihat Biodata' : 'Sembunyikan Biodata';
}
