// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	电子设备: [
		{
			name: "Nothing Phone (2)",
			image: "/images/device/nothing.jpg",
			specs: "Grey / 12G + 256G",
			description: "会发光",
			link: "https://nothingcn.com/pages/phone-2",
		},
		{
			name: "HyperX Alloy Origins",
			image: "/images/device/hyperx.webp",
			specs: "Red / 104 keys",
			description: "音游利器",
			link: "https://row.hyperx.com/zh-hans/products/hyperx-alloy-origins-mechanical-gaming-keyboard",
		},
		{
			name: "雷霆80",
			image: "/images/device/Racket.jpg",
			specs: "4U / G5",
			description: "Classical",
			link: "https://www.badmintoncn.com/cbo_eq/view.php?eid=9748",
		},
	],
	SP: [
		{
			name: "阿四辣椒酱",
			image: "/images/device/lajiao.jpg",
			specs: "400g",
			description:
				"amazing spicy sauce made by MeiZhou",
			link: "https://www.taobao.com/list/item/dUdTMmZwUkxrcVJIUmpDNmxDT0FKZz09.htm?spm=a21wu.10013406.taglist-content.1.266f28979yVrpO",
		},
	],
};
