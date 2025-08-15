class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

    def insert(self, key):
        if key < self.val:
            if self.left is None:
                self.left = Node(key)
            else:
                self.left.insert(key)
        elif key > self.val:
            if self.right is None:
                self.right = Node(key)
            else:
                self.right.insert(key)
        # If key == self.val, we do nothing (no duplicates in this BST)

    def inorder(self):
        # Inorder traversal: left -> root -> right
        if self.left:
            self.left.inorder()
        print(self.val, end=' ')
        if self.right:
            self.right.inorder()


if __name__ == '__main__':
    root = Node(10)
    root.insert(5)
    root.insert(15)
    root.insert(3)
    root.insert(7)
    root.insert(12)
    root.insert(17)
    root.inorder()  # Expected Output: 3 5 7 10 12 15 17
