export default function ({
  $axios,
  redirect,
  store,
}: {
  $axios: any;
  redirect: any;
  store: any;
}) {
  $axios.onRequest((config: any) => {
    $axios.setToken(store.state.auth.asscessToken, 'Bearer');
    return config;
  });
}
