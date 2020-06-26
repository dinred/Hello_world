import PaginateMixins from '@/mixins/paginate'

export default {
	mixins: [PaginateMixins],
	data: () => ({
    a: "a",
    b: "b",
  }),
  methods: {
    callA() {
      console.log(this.a);
    },
    callB() {
      console.log(this.b);
    },
    getList() {
      console.log(`取得第${this.paginate.page}頁資料`)
    },
    refresh() {
      this.getList()
    },
    doSearch() {
      this.paginate.page = 1
      this.getList()
    }
  },
  mounted() {
    console.log('a')
  }
};

export const a = "a"
const b = 'b'
