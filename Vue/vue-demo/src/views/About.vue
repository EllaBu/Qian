<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { getBookList, getWeather } from "../api/services/about";

export default {
  name: 'about',
  created() {
    // key=9175b2ed55a7fe19c49a497e8d405b43&dtype=json
    // joke/content/list.php?key=2aeb61008fde5920f66d2492709a2f8e&page=2&pagesize=10&sort=asc&time=1418745237
    getBookList({
      key:'9175b2ed55a7fe19c49a497e8d405b43',
      dtype: 'json'
    }).then(res => {
      console.log(res.result)
    })

    getWeather({
      key: '45293d3aebf2ed9fc10a0ae6a365a563',
      city: '北京'
    }).then(res => {
      console.log(res.result)
    })
    // getBookList({
    //   key:'2aeb61008fde5920f66d2492709a2f8e',
    //   page: 2,
    //   pagesize: 10,
    //   sort: 'asc',
    //   time: 1418745237
    // }).then(res => {
    //   console.log(res.result.data)
    // })
  }
}
</script>
