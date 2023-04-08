<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "logoutPage",

  mounted() {
    this.exit_login();
  },

  methods: {
    ...mapActions(["logout"]),
    exit_login() {
      this.logout();
    },
  },
};
</script>
