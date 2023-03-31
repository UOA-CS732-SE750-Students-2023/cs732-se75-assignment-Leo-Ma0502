<script>
import { mapMutations } from "vuex";
export default {
  name: "logoutPage",

  mounted() {
    this.logout();
  },

  methods: {
    ...mapMutations("user", ["exit_login"]),
    logout() {
      this.exit_login();
      window.alert("Succefully logged out");
    },
  },
};
</script>
