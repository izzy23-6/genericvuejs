import residents from "@/components/Residents/residents";
import supplies from "@/components/Supplies/supplies";
import QuickCharges from "@/components/Residents/QuickCharges";
// import axios from 'axios'
export default {
  name: "Nav",
  components: {
    "app-residents": residents,
    "app-supplies": supplies,
    "app-quickcharges": QuickCharges
  },
  data() {
    return {
      selectedComponent: "app-supplies"
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push('/')
    }
  }
};