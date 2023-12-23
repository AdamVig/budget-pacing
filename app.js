const {data: {category_groups: categoryGroups}} = await fetch(`/api/budgets/last-used/categories`)

let spendingCategory
for (const {categories} of categoryGroups) {
	for (const category of categories) {
		if (category.name === 'Spending') {
			spendingCategory = category
			break
		}
	}

	if (spendingCategory !== undefined) {
		break
	}
}

const now = new Date()
const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
console.log('Month progress:', (now.getDate() / daysInMonth) * 100)

console.log('Spending progress:', ((spendingCategory.activity * -1) / spendingCategory.budgeted) * 100, `($${spendingCategory.activity * -1 / 1000} / $${spendingCategory.budgeted / 1000})`)
