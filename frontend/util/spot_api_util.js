export const fetchSpots = () => {
  return $.ajax({
    method: "GET",
    url: 'api/spots',
  });
};

export const fetchSpot = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/spots/${id}`,
  });
};

export const createSpot = (spot) => {
  return $.ajax({
    method: "POST",
    url: 'api/spots',
    data: { spot },
  });
};

export const updateSpot = (spot) => {
  return $.ajax({
    method: "PATCH",
    url: `api/spots/${spot.id}`,
    data: { spot },
  });
};