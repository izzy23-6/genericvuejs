// import axios from 'axios'
import $ from 'jquery'

export default {
  name: "Supplies",
  data() {
    return {
      // testData: {}
    };
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
    })

    //   console.log('mounted')
    //   axios.get('http://127.0.0.1:8000/api/skills/')
    //     .then((response) => {
    //       // console.log(response)
    //       this.testData = response.data
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
  }
};
