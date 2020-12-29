export default {
  async registerCoach(context, data) {
    const userId = context.rootGetter.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      ares: data.areas,
    };

    const response = await fetch(
      `https://coachappvue-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      //
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://coachappvue-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        ares: responseData[key].ares,
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  },
};
