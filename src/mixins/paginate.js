export default {
  data: () => ({
    paginate: {
      perpage: 10,
      page: 1,
      total: 0,
    },
	}),
	methods: {
		pageChange(page) {
			this.paginate.page = page
			this.refresh()
		}
	}
};
