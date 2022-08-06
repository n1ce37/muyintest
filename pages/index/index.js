const app = getApp()

Page({
  data: {
    mainActiveIndex: 0,
    activeId: 0,
    items: [],
    treeSelectShow: false,
  },
  onLoad() {
    // var _this = this
    // wx.request({
    //   url: 'http://localhost:3000',
    //   dataType: 'json',
    //   success(res) {
    //     console.log(_this.data.data)
    //     _this.setData({
    //       items: res.data.data
    //     })
    //   }
    // })
    this.setData({
      items: [
        {
          text: '1月份',
          children: [
            {
              text: '孩子',
            },
            {
              text: '健康',
            },
            {
              text: '睡眠'
            }
          ]
        },
        {
          text: '2月份',
          children: [
            {
              text: '孩子',
            },
            {
              text: '健康',
            },
            {
              text: '睡眠'
            }
          ]
        },
        { text: '3月份' },
        { text: '3月份' },
        { text: '3月份' },
        { text: '3月份' },
        { text: '3月份' },
        { text: '3月份' },
        { text: '3月份' },
        { text: '3月份' },
        { text: '3月份' },
        { text: '3月份' },
        { text: '3月份' },
        { text: '3月份' },
        { text: '3月份' },
      ]
    })
  },

  showTreeSelect() {
    this.setData({ treeSelectShow: true })
  },

  onClose() {
    this.setData({ treeSelectShow: false });
  },

  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({ detail = {} }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;
    this.setData({ activeId });
  },
})
