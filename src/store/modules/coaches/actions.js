export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetter.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      ares: data.areas,
    };

    context.commit('registerCoach', coachData);
  },
};
