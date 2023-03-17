const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fr-FR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
};

export default formatDate;