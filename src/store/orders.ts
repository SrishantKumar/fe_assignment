import { create } from 'zustand';
import { orders as initialOrders, PizzaOrder, OrderStatus } from '@/data/orders';

interface OrderFilters {
  status: OrderStatus | 'All';
  search: string;
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
}

interface OrderSort {
  field: keyof PizzaOrder | '';
  direction: 'asc' | 'desc';
}

interface OrdersStore {
  orders: PizzaOrder[];
  filters: OrderFilters;
  sort: OrderSort;
  filteredOrders: PizzaOrder[];
  setFilter: (filter: Partial<OrderFilters>) => void;
  setSort: (sort: OrderSort) => void;
  resetFilters: () => void;
}

const defaultFilters: OrderFilters = {
  status: 'All',
  search: '',
  dateRange: {
    start: null,
    end: null,
  },
};

export const useOrdersStore = create<OrdersStore>()((set, get) => ({
  orders: initialOrders,
  filters: defaultFilters,
  sort: { field: '', direction: 'desc' },
  filteredOrders: initialOrders,

  setFilter: (filter) => {
    set((state) => {
      const newFilters = { ...state.filters, ...filter };
      const filtered = applyFilters(state.orders, newFilters);
      const sorted = applySort(filtered, state.sort);
      return { filters: newFilters, filteredOrders: sorted };
    });
  },

  setSort: (sort) => {
    set((state) => {
      const sorted = applySort(state.filteredOrders, sort);
      return { sort, filteredOrders: sorted };
    });
  },

  resetFilters: () => {
    set((state) => ({
      filters: defaultFilters,
      filteredOrders: applySort(state.orders, state.sort),
    }));
  },
}));

function applyFilters(orders: PizzaOrder[], filters: OrderFilters): PizzaOrder[] {
  return orders.filter((order) => {
    // Status filter
    if (filters.status !== 'All' && order.status !== filters.status) {
      return false;
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        order.id.toLowerCase().includes(searchLower) ||
        order.customerName.toLowerCase().includes(searchLower) ||
        order.pizzaType.toLowerCase().includes(searchLower);
      if (!matchesSearch) {
        return false;
      }
    }

    // Date range filter
    if (filters.dateRange.start || filters.dateRange.end) {
      const orderDate = new Date(order.orderDate);
      if (
        filters.dateRange.start &&
        orderDate < filters.dateRange.start
      ) {
        return false;
      }
      if (
        filters.dateRange.end &&
        orderDate > filters.dateRange.end
      ) {
        return false;
      }
    }

    return true;
  });
}

function applySort(orders: PizzaOrder[], sort: OrderSort): PizzaOrder[] {
  if (!sort.field) return orders;

  return [...orders].sort((a, b) => {
    if (!sort.field) return 0;
    
    const aValue = a[sort.field];
    const bValue = b[sort.field];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sort.direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    const isDate = (value: any): value is Date => value instanceof Date;
    if (isDate(aValue) && isDate(bValue)) {
      return sort.direction === 'asc'
        ? aValue.getTime() - bValue.getTime()
        : bValue.getTime() - aValue.getTime();
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sort.direction === 'asc'
        ? aValue - bValue
        : bValue - aValue;
    }

    return 0;
  });
}
