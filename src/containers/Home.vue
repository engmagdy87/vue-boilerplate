<template>
  <div>
    <Hello />
    <b-button type="is-info">Info</b-button>
    <Avatar />
  </div>
</template>

<script>
import Hello from '@/components/Hello';
import Avatar from '@/shared/Avatar';

export default {
  components: {
    Hello,
    Avatar
  }
};
</script>
