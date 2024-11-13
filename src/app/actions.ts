"use server"

export const findDistance = async (state: number, fd: FormData) => {
  const points = (fd.get("input") as string)
    .split(/\r\n|\r|\n/)
    .map((address) => ({ address }))

  console.log(points)

  const data = await fetch(
    "https://routes.googleapis.com/directions/v2:computeRoutes",
    {
      method: "post",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": process.env.TOKEN!,
        "x-goog-fieldmask": "routes.distanceMeters",
      },
      body: JSON.stringify({
        origin: points[0],
        destination: points[points.length - 1],
        intermediates: points.slice(1, -1),
        travelMode: "drive",
        routeModifiers: { avoidTolls: true },
      }),
    },
  ).then((res) => res.json())

  return data.routes[0].distanceMeters * 0.000621371
}
