import React from 'react'
import styles from './TableLine.module.scss'
import { Delete, Description } from '@mui/icons-material'
import InputField from 'src/shared/ui/InputField'
import cn from 'clsx'

import { Button } from 'src/shared/ui'
import { TableLineProps } from '../Table.types'

const TableLine: React.FC<TableLineProps> = ({
  lineData,
  onAddChild,
  onDelete,
  onDoubleClick,
  onCancelEdit,
  isEditing,
  onInputChange,
  onKeyDown,
  editingValues,
}) => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest(`.${styles.line}`)) {
      onCancelEdit()
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const containerClass = cn(styles.iconContainer, {
    [`level-${lineData.level}`]: lineData.level > 0,
  })

  return (
    <div className={styles.line} onDoubleClick={() => onDoubleClick(lineData.id!)}>
      <div
        className={styles.iconButtons}
        // style={{ paddingLeft: `${lineData.level ? lineData.level * 25 : 0}px` }}
      >
        {lineData.id !== null && (
          // <div className={`${styles.iconContainer} level-${lineData.level}`}>
          <div className={containerClass}>
            <Button className={styles.addButton} onClick={() => onAddChild(lineData.id!)}>
              <Description className={styles.addIcon} />
            </Button>
            <Button
              className={`${styles.deleteButton} ${styles.hidden}`}
              onClick={() => onDelete(lineData.id!)}
            >
              <Delete className={styles.deleteIcon} />
            </Button>
          </div>
        )}
      </div>
      {isEditing ? (
        <>
          <InputField
            name="rowName"
            value={editingValues?.rowName || ''}
            onChange={(e) => onInputChange(e, lineData.id!)}
            onKeyDown={(e) => onKeyDown(e, lineData.id!)}
          />
          <InputField
            name="salary"
            type="number"
            value={editingValues?.salary || ''}
            onChange={(e) => onInputChange(e, lineData.id!)}
            onKeyDown={(e) => onKeyDown(e, lineData.id!)}
          />
          <InputField
            name="equipmentCosts"
            type="number"
            value={editingValues?.equipmentCosts || ''}
            onChange={(e) => onInputChange(e, lineData.id!)}
            onKeyDown={(e) => onKeyDown(e, lineData.id!)}
          />
          <InputField
            name="overheads"
            type="number"
            value={editingValues?.overheads || ''}
            onChange={(e) => onInputChange(e, lineData.id!)}
            onKeyDown={(e) => onKeyDown(e, lineData.id!)}
          />
          <InputField
            name="estimatedProfit"
            type="number"
            value={editingValues?.estimatedProfit || ''}
            onChange={(e) => onInputChange(e, lineData.id!)}
            onKeyDown={(e) => onKeyDown(e, lineData.id!)}
          />
        </>
      ) : (
        <>
          <div className={styles.cell}>{lineData.rowName}</div>
          <div className={styles.cell}>{lineData.salary}</div>
          <div className={styles.cell}>{lineData.equipmentCosts}</div>
          <div className={styles.cell}>{lineData.overheads}</div>
          <div className={styles.cell}>{lineData.estimatedProfit}</div>
        </>
      )}
    </div>
  )
}

export default TableLine
