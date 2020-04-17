<template>
  <div class="card">
    <b-form-group label="Room Variant" label-for="Room id">
      <b-form-select
        v-model="room_id_value"
        :options="room_option"
        id="Room id"
      >
        <template v-slot:first>
          <option value="">-- dark --</option>
        </template>
      </b-form-select>
    </b-form-group>
    <b-table hover :items="items" :table-variant="room_id_value"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
          { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' }
        ],
          room_option: [
          '1',
          '2',
          '3',
          '4',
          '5',
          'success',
          'light',
          'dark'
        ],
          room_id_value: 'dark',
      }
    }
  }
</script>

<style scoped>

</style>