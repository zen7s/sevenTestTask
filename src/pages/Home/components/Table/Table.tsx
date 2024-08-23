import React from 'react'
import TableHead from './TableHead'
import TableLine from './TableLine'
import { useTable } from './useTable'
import { TableItem } from './Table.types'
import { Button } from 'src/shared/ui'

import styles from './Table.module.scss'

const Table: React.FC = () => {
  const {
    list,
    isLoading,
    isError,
    createItem,
    editingItemId,
    isAdding,
    editingValues,
    handleAddChild,
    handleInputChange,
    handleKeyDown,
    handleDoubleClick,
    handleCancelEdit,
    handleDelete,
  } = useTable()

  const renderLines = (items: TableItem[], level = 0): React.ReactElement[] => {
    return items.flatMap((item) => {
      const result: React.ReactElement[] = [
        <TableLine
          key={item.id}
          lineData={{ ...item, level }}
          onAddChild={handleAddChild}
          onDelete={handleDelete}
          onDoubleClick={handleDoubleClick}
          onCancelEdit={handleCancelEdit}
          isEditing={editingItemId === item.id}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          editingValues={editingItemId === item.id ? editingValues : null}
        />,
      ]

      if (item.child && item.child.length > 0) {
        result.push(...renderLines(item.child, level + 1))
      }

      if (isAdding && editingValues?.parentId === item.id) {
        result.push(
          <TableLine
            key={`new-${item.id}`}
            lineData={{ ...editingValues, level: level + 1 } as TableItem}
            onAddChild={() => {}}
            onDelete={() => {}}
            onDoubleClick={() => {}}
            onCancelEdit={handleCancelEdit}
            isEditing={true}
            onInputChange={handleInputChange}
            onKeyDown={handleKeyDown}
            editingValues={editingValues}
          />
        )
      }
      return result
    })
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading data.</div>

  return (
    <div className="table">
      <TableHead />
      {renderLines(list)}
      {list.length === 0 && !isAdding && (
        <Button
          className={styles.addBtn}
          onClick={() =>
            createItem({
              id: 0,
              equipmentCosts: 0,
              estimatedProfit: 0,
              machineOperatorSalary: 0,
              mainCosts: 0,
              materials: 0,
              mimExploitation: 0,
              overheads: 0,
              rowName: '',
              salary: 0,
              supportCosts: 0,
              total: 0,
              parentId: null,
            })
          }
        >
          Добавить строку
        </Button>
      )}
      {isAdding && editingValues?.parentId === null && (
        <TableLine
          key={`new-root`}
          lineData={{ ...editingValues, level: 0 } as TableItem}
          onAddChild={() => {}}
          onDelete={() => {}}
          onDoubleClick={() => {}}
          onCancelEdit={handleCancelEdit}
          isEditing={true}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          editingValues={editingValues}
        />
      )}
    </div>
  )
}

export default Table
