export async function getAllEvents() {
  const response = await fetch();
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}
