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

  const renderLines = (items: TableItem[], level = 0): React.ReactElement => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <TableLine
              lineData={{ ...item, level }}
              onAddChild={handleAddChild}
              onDelete={handleDelete}
              onDoubleClick={handleDoubleClick}
              onCancelEdit={handleCancelEdit}
              isEditing={editingItemId === item.id}
              onInputChange={handleInputChange}
              onKeyDown={handleKeyDown}
              editingValues={editingItemId === item.id ? editingValues : null}
            />
            {item.child && item.child.length > 0 && renderLines(item.child, level + 1)}

            {isAdding && editingValues?.parentId === item.id && (
              <ul className={`styles.${level + 1}`}>
                <li key={`new-${item.id}`}>
                  <TableLine
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
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    )
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
        <ul>
          <li key={`new-root`}>
            <TableLine
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
          </li>
        </ul>
      )}
    </div>
  )
}

export default Table
