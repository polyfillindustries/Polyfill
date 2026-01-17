'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { ExploreCards } from './ExploreCards';
import type { CategoryProductsListProps } from '@/types';

export function CategoryProductsList({ products, categoryName }: CategoryProductsListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term (name or alias)
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }

    const term = searchTerm.toLowerCase();
    return products.filter((product) => {
      const matchesName = product.name.toLowerCase().includes(term);
      const matchesAlias = product.alias?.toLowerCase().includes(term);
      return matchesName || matchesAlias;
    });
  }, [products, searchTerm]);

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products by name or alias..."
              className="block w-full pl-12 pr-12 py-4 border border-gray-300 rounded-2xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-bprimary focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Info */}
      {searchTerm && (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="text-center">
            <p className="text-gray-600 text-sm md:text-base">
              {filteredProducts.length > 0 ? (
                <>
                  Showing <span className="font-semibold text-bprimary">{filteredProducts.length}</span>{' '}
                  {filteredProducts.length === 1 ? 'result' : 'results'} for{' '}
                  <span className="font-semibold text-gray-900">&quot;{searchTerm}&quot;</span> in{' '}
                  <span className="font-semibold text-gray-900">{categoryName}</span>
                </>
              ) : (
                <>
                  No results found for{' '}
                  <span className="font-semibold text-gray-900">&quot;{searchTerm}&quot;</span> in{' '}
                  <span className="font-semibold text-gray-900">{categoryName}</span>
                </>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <ExploreCards products={filteredProducts} />
    </div>
  );
}
