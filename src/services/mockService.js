const sections = [
  {
    value: '1',
    text: 'Subsurface'
  },
  {
    value: '2',
    text: 'Surface'
  }
]

const applications = [
  {
    value: '1',
    text: 'Openwork'
  },
  {
    value: '2',
    text: 'WellView'
  }
]

const report = [
  {
    value: '1',
    text: 'RFT'
  },
  {
    value: '2',
    text: 'DFT'
  }
]

const resource = {
  filters: [
    {
      filterType: 'selectOption',
      filterItems: [
        {
          value: '1',
          text: 'select 1'
        },
        {
          value: '2',
          text: 'select 2'
        }
      ],
      filterValue: '',
      filterName: 'Select',
      isMandatory: true
    },
    {
      filterType: 'selectTextInput',
      filterItems: [],
      filterValue: '',
      filterName: 'TextField',
      isMandatory: true
    },
    {
      filterType: 'selectNumberInput',
      filterItems: [],
      filterValue: '',
      filterName: 'NumberField',
      isMandatory: false
    }
  ],
  table: {
    tableName: 'Food',
    headers: [
      {
        text: 'Dessert (100g serving)',
        value: 'name'
      },
      {
        text: 'Calories',
        value: 'calories'
      },
      {
        text: 'Fat (g)',
        value: 'fat'
      },
      {
        text: 'Carbs (g)',
        value: 'carbs'
      },
      {
        text: 'Protein (g)',
        value: 'protein'
      },
      {
        text: 'Iron (%)',
        value: 'iron'
      }
    ]
  }
}

const result = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: '6%'
  }
]

const menu = [
  {
    text: 'Subsurface',
    value: '1'
  },
  {
    text: 'Surface',
    value: '2'
  }
]

const reportBySection = {
  header: 'REPORT OF SUBSURFACE',
  reports: [
    {
      reportText: 'RFT',
      reportValue: 'rft',
      reportDesc: 'Description RFT'
    },
    {
      reportText: 'LFT',
      reportValue: 'lft',
      reportDesc: 'Description LFT'
    }
  ]
}

export default {
  getSection () {
    return new Promise((resolve) => {
      setTimeout(() => resolve({data: sections}), 200)
    })
  },
  getApplication (sections) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({data: applications}), 200)
    })
  },
  getReport (application) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({data: report}), 200)
    })
  },
  getResource (section, report) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({data: resource}), 200)
    })
  },
  getResult () {
    return new Promise((resolve) => {
      setTimeout(() => resolve({data: result}), 200)
    })
  },
  getMenu () {
    return new Promise((resolve) => {
      setTimeout(() => resolve({data: menu}), 200)
    })
  },
  getReportBySection (section) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({data: reportBySection}), 200)
    })
  }
}
