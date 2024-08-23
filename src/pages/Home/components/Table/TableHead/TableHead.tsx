import styles from './TableHead.module.scss'

const data = [
  'Уровень',
  'Наименование работ',
  'Основная з/п',
  'Оборудование',
  'Накладные расходы',
  'Сметная прибыль',
]

const TableHead: React.FC = () => {
  return (
    <div className={styles.head}>
      {data.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export default TableHead
