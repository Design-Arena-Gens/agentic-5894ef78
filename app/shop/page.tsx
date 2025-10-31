'use client'

import { useState, useMemo } from 'react'
import { books, getAllCategories } from '@/lib/books'
import BookCard from '@/components/BookCard'
import styles from './shop.module.css'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [sortBy, setSortBy] = useState<string>('title')
  const categories = ['All', ...getAllCategories()]

  const filteredAndSortedBooks = useMemo(() => {
    let result = selectedCategory === 'All'
      ? books
      : books.filter(book => book.category === selectedCategory)

    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      case 'title':
      default:
        result = [...result].sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return result
  }, [selectedCategory, sortBy])

  return (
    <div className={styles.shopPage}>
      <div className="container">
        <div className={styles.header}>
          <h1>Our Storybook Collection</h1>
          <p>Discover magical tales for every young reader</p>
        </div>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label>Category:</label>
            <div className={styles.categoryButtons}>
              {categories.map(category => (
                <button
                  key={category}
                  className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.select}
            >
              <option value="title">Title (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className={styles.results}>
          <p>{filteredAndSortedBooks.length} books found</p>
        </div>

        <div className="grid grid-3">
          {filteredAndSortedBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}
